import { useState } from 'react';
import './App.css';

const PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
];

const emptyForm = {
  email: '',
  name: '',
  address: '',
  address2: '',
  city: '',
  province: '',
  postalCode: '',
  agree: false,
};

function App() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="container form-box">
      <h1 className="text-center">Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="1234 Main St"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={form.address2}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="province">Province</label>
            <select
              className="form-control"
              id="province"
              name="province"
              value={form.province}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              {PROVINCES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="agree">
              Agree Terms &amp; Condition?
            </label>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>

      {submitted && (
        <table className="table table-bordered output-table">
          <tbody>
            <tr>
              <td className="label-cell">Email:</td>
              <td>{submitted.email}</td>
            </tr>
            <tr>
              <td className="label-cell">Full Name:</td>
              <td>{submitted.name}</td>
            </tr>
            <tr>
              <td className="label-cell">Address:</td>
              <td>
                {submitted.address}
                {submitted.address2 && `, ${submitted.address2}`}
              </td>
            </tr>
            <tr>
              <td className="label-cell">City:</td>
              <td>{submitted.city}</td>
            </tr>
            <tr>
              <td className="label-cell">Province:</td>
              <td>{submitted.province}</td>
            </tr>
            <tr>
              <td className="label-cell">Postal Code:</td>
              <td>{submitted.postalCode}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
