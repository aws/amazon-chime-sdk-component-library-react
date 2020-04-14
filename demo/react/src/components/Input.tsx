import React from "react";

interface InputProps {
  name: string;
  value: string;
  title?: string;
  type: string;
  placeholder: string;
  onChange: (data: any) => any;
}

const Input: React.SFC<InputProps> = ({ name, value, title, type, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
