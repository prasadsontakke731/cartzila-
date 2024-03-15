import React from 'react'
import "./Address.css"
const Address = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Delivery Address</h2>
                    <form>
                        <div className="mb-3">
                            <label for="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                        </div>
                        <div className="mb-3">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" required />
                        </div>
                        <div className="mb-3">
                            <label for="inputState" className="form-label">State</label>
                            <input type="text" className="form-control" id="inputState" required />
                        </div>
                        <div className="mb-3">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" required />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Address