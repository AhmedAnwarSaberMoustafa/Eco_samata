import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Title from '../UI/Title'
import { cartActions } from '../features/Cart/cart-slice'

const Container = styled.div``

const Content = styled.div`
  min-height: 55vh;
  padding: 1.5rem 1.5rem 2.5rem;
  background: linear-gradient(135deg, #f8f7f2 0%, #ffffff 55%, #eef7f4 100%);
`

const Text = styled.p`
  font-size: 1.1rem;
`

const Grid = styled.div`
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 1rem;
  align-items: center;
  border: 1px solid #dce8e2;
  border-radius: 12px;
  padding: 0.85rem;
  background: #ffffff;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const ProductImage = styled.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
  background-color: #f8f8f8;
  border-radius: 8px;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`

const ItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

const ItemTitle = styled.h4`
  font-size: 1.03rem;
  color: #2b3f39;
`

const DeleteButton = styled.button`
  border: none;
  background: #ffecec;
  color: #b52d2d;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  color: #5a6b66;
  font-size: 0.95rem;
`

const ControlsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.7rem;
`

const QtyBox = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #c9d9d1;
  border-radius: 8px;
  overflow: hidden;
`

const QtyButton = styled.button`
  border: none;
  background: #f4faf7;
  width: 34px;
  height: 34px;
  font-size: 1.1rem;
  cursor: pointer;
`

const QtyValue = styled.span`
  width: 40px;
  text-align: center;
  font-weight: 700;
`

const VariantSelect = styled.select`
  border: 1px solid #c9d9d1;
  border-radius: 8px;
  height: 34px;
  padding: 0 0.45rem;
  background: #fff;
`

const Subtotal = styled.p`
  font-weight: 700;
  color: #195f48;
`

const Total = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`

const CheckoutCard = styled.form`
  border: 1px solid #dbe8e1;
  border-radius: 12px;
  background: #ffffff;
  padding: 1rem;
  align-self: start;
  position: sticky;
  top: 1rem;
`

const FormTitle = styled.h3`
  margin-bottom: 0.75rem;
`

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 0.8rem;
  border: 1px solid #cad5cf;
  border-radius: 8px;
  margin-bottom: 0.65rem;
  font-size: 0.95rem;
`

const ErrorText = styled.p`
  color: #b42828;
  font-size: 0.85rem;
  margin: -0.35rem 0 0.55rem;
`

const OrderButton = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background: #0e6f54;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
`

const popIn = keyframes`
  0% { opacity: 0; transform: scale(0.86) translateY(10px); }
  65% { opacity: 1; transform: scale(1.03) translateY(0); }
  100% { opacity: 1; transform: scale(1); }
`

const drawCheck = keyframes`
  from { stroke-dashoffset: 44; }
  to { stroke-dashoffset: 0; }
`

const SuccessBox = styled.div`
  margin-top: 0.9rem;
  border-radius: 10px;
  background: #e7f6ef;
  border: 1px solid #b4e0cc;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  animation: ${popIn} 420ms ease-out both;
`

const SuccessIcon = styled.svg`
  width: 34px;
  height: 34px;
  flex-shrink: 0;

  .check {
    fill: none;
    stroke: #0d7f5b;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 44;
    stroke-dashoffset: 44;
    animation: ${drawCheck} 500ms ease 180ms forwards;
  }
`

function Cart() {
  const dispatch = useDispatch()
  const itemsCount = useSelector((state) => state.cart.cartItemsLength)
  const items = useSelector((state) => state.cart.items)
  const grandTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const [orderForm, setOrderForm] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({})
  const [orderDone, setOrderDone] = useState(false)

  const validate = useMemo(() => {
    return (formState) => {
      const nextErrors = {}
      if (!formState.name.trim()) nextErrors.name = 'Name is required.'
      if (!formState.phone.trim()) {
        nextErrors.phone = 'Phone is required.'
      } else if (!/^[+]?\d[\d\s-]{6,}$/.test(formState.phone.trim())) {
        nextErrors.phone = 'Enter a valid phone number.'
      }
      if (!formState.email.trim()) {
        nextErrors.email = 'Email is required.'
      } else if (!/^\S+@\S+\.\S+$/.test(formState.email.trim())) {
        nextErrors.email = 'Enter a valid email address.'
      }
      return nextErrors
    }
  }, [])

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setOrderForm((prev) => ({ ...prev, [name]: value }))
    if (orderDone) setOrderDone(false)
  }

  const submitOrderHandler = (e) => {
    e.preventDefault()

    if (!items.length) {
      setErrors({ submit: 'Your cart is empty. Add items first.' })
      return
    }

    const nextErrors = validate(orderForm)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      return
    }

    setOrderDone(true)
    setOrderForm({ name: '', phone: '', email: '' })
    dispatch(cartActions.clearCart())
  }

  const removeItemHandler = (item) => {
    dispatch(
      cartActions.removeFromCart({
        id: item.id,
        size: item.size,
        color: item.color,
      })
    )
  }

  const changeQuantityHandler = (item, nextQuantity) => {
    dispatch(
      cartActions.updateQuantity({
        id: item.id,
        size: item.size,
        color: item.color,
        quantity: nextQuantity,
      })
    )
  }

  const changeVariantHandler = (item, field, value) => {
    dispatch(
      cartActions.updateItemVariant({
        id: item.id,
        oldSize: item.size,
        oldColor: item.color,
        newSize: field === 'size' ? value : item.size,
        newColor: field === 'color' ? value : item.color,
      })
    )
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <Title style={{ margin: '0 0 1rem 0' }}>Cart</Title>
        <Text>{`You have ${itemsCount} item${itemsCount === 1 ? '' : 's'} in your cart.`}</Text>
        <Grid>
          <div>
            {!items.length && <Text>No items in cart yet.</Text>}
            {!!items.length && (
              <ItemsWrapper>
                {items.map((item) => (
                  <CartItem key={`${item.id}-${item.size}-${item.color}`}>
                    <ProductImage src={item.img} alt={item.title} />
                    <ItemInfo>
                      <ItemTop>
                        <ItemTitle>{item.title}</ItemTitle>
                        <DeleteButton type='button' onClick={() => removeItemHandler(item)} aria-label='Delete cart item'>
                          <DeleteOutlineRoundedIcon fontSize='small' />
                        </DeleteButton>
                      </ItemTop>

                      <MetaRow>
                        <span>{`Price: $${item.price}`}</span>
                        {!!item.size && <span>{`Current Size: ${item.size}`}</span>}
                        {!!item.color && <span>{`Current Color: ${item.color}`}</span>}
                      </MetaRow>

                      <ControlsRow>
                        <QtyBox>
                          <QtyButton type='button' onClick={() => changeQuantityHandler(item, item.quantity - 1)}>-</QtyButton>
                          <QtyValue>{item.quantity}</QtyValue>
                          <QtyButton type='button' onClick={() => changeQuantityHandler(item, item.quantity + 1)}>+</QtyButton>
                        </QtyBox>

                        {!!item.availableSizes?.length && (
                          <VariantSelect
                            value={item.size}
                            onChange={(e) => changeVariantHandler(item, 'size', e.target.value)}
                          >
                            {item.availableSizes.map((sizeOption) => (
                              <option key={sizeOption} value={sizeOption}>
                                {`Size: ${String(sizeOption).toUpperCase()}`}
                              </option>
                            ))}
                          </VariantSelect>
                        )}

                        {!!item.availableColors?.length && (
                          <VariantSelect
                            value={item.color}
                            onChange={(e) => changeVariantHandler(item, 'color', e.target.value)}
                          >
                            {item.availableColors.map((colorOption) => (
                              <option key={colorOption} value={colorOption}>
                                {`Color: ${colorOption}`}
                              </option>
                            ))}
                          </VariantSelect>
                        )}
                      </ControlsRow>

                      <Subtotal>{`Subtotal: $${(item.price * item.quantity).toFixed(2)}`}</Subtotal>
                    </ItemInfo>
                  </CartItem>
                ))}
              </ItemsWrapper>
            )}
            {!!items.length && <Total>{`Total: $${grandTotal.toFixed(2)}`}</Total>}
          </div>

          <CheckoutCard onSubmit={submitOrderHandler}>
            <FormTitle>Complete Your Order</FormTitle>

            <Label htmlFor="order-name">Name</Label>
            <Input
              id="order-name"
              name="name"
              type="text"
              value={orderForm.name}
              onChange={inputChangeHandler}
              placeholder="Your full name"
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}

            <Label htmlFor="order-phone">Phone</Label>
            <Input
              id="order-phone"
              name="phone"
              type="tel"
              value={orderForm.phone}
              onChange={inputChangeHandler}
              placeholder="+20..."
            />
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}

            <Label htmlFor="order-email">Email</Label>
            <Input
              id="order-email"
              name="email"
              type="email"
              value={orderForm.email}
              onChange={inputChangeHandler}
              placeholder="you@email.com"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            {errors.submit && <ErrorText>{errors.submit}</ErrorText>}

            <OrderButton type="submit">Place Order</OrderButton>

            {orderDone && (
              <SuccessBox>
                <SuccessIcon viewBox="0 0 52 52" aria-hidden="true">
                  <circle cx="26" cy="26" r="24" stroke="#93d3b7" strokeWidth="2" fill="none" />
                  <path className="check" d="M14 27l8 8 16-16" />
                </SuccessIcon>
                <div>
                  <strong>Order Done</strong>
                  <p>Your request was saved successfully.</p>
                </div>
              </SuccessBox>
            )}
          </CheckoutCard>
        </Grid>
      </Content>
      <Footer />
    </Container>
  )
}

export default Cart