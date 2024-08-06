import React from 'react';

const FormInputs = ({ formData, errors, handleChange, itemsInCart }) => (
  <>
    <p>Complete el formulario y seleccione el Método de pago</p>
    <div className="form-row">
      <div className="form-group">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
          pattern="[A-Za-z ]+"
          title="Solo se permiten letras"
          disabled={itemsInCart === 0}
        />
        {errors.nombre && <span className="error">{errors.nombre}</span>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          required
          pattern="[A-Za-z ]+"
          title="Solo se permiten letras"
          disabled={itemsInCart === 0}
        />
        {errors.apellido && <span className="error">{errors.apellido}</span>}
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <input
          type="text"
          name="calle"
          value={formData.calle}
          onChange={handleChange}
          placeholder="Calle"
          required
          pattern="[A-Za-z0-9 ]+"
          title="Solo se permiten letras y números"
          disabled={itemsInCart === 0}
        />
        {errors.calle && <span className="error">{errors.calle}</span>}
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <input
          type="text"
          name="codigoPostal"
          value={formData.codigoPostal}
          onChange={handleChange}
          placeholder="Código Postal"
          required
          pattern="\d*"
          title="Solo se permiten números"
          disabled={itemsInCart === 0}
        />
        {errors.codigoPostal && <span className="error">{errors.codigoPostal}</span>}
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
          pattern="\d*"
          title="Solo se permiten números"
          disabled={itemsInCart === 0}
        />
        {errors.telefono && <span className="error">{errors.telefono}</span>}
      </div>
    </div>
  </>
);

export default FormInputs;
