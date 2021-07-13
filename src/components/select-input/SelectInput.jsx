import './SelectInput.scss';

function SelectInput({ value, onChange, placeholder, list, className }) {
  return (
    <div className={`select ${className}`}>
      <select
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        <option value=''>{placeholder}</option>
        {list.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;
