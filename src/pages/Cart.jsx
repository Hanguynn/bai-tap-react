import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, dispatch, totalPrice } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Giỏ hàng đang trống");
      return;
    }

    alert("Đặt hàng thành công!");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <section className="container page-space">
      <h1 className="mb-4">Giỏ hàng</h1>

      {cart.length === 0 ? (
        <div className="alert alert-light border">
          Chưa có sản phẩm nào trong giỏ hàng.
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>

              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString()} VND</td>
                    <td>
                      <button
                        className="btn btn-outline-dark btn-sm me-2"
                        onClick={() =>
                          dispatch({ type: "DECREASE", payload: item.id })
                        }
                      >
                        -
                      </button>

                      {item.quantity}

                      <button
                        className="btn btn-outline-dark btn-sm ms-2"
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item.id })
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>{(item.price * item.quantity).toLocaleString()} VND</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item.id })
                        }
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-end mt-4">
            <h4>Tổng tiền: {totalPrice.toLocaleString()} VND</h4>

            <button className="btn btn-success mt-3" onClick={handleCheckout}>
              Thanh toán
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;