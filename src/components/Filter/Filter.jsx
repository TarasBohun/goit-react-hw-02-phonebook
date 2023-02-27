import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
