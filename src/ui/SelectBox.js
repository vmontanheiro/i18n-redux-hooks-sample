import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const Form = styled(FormControl)`
  && {
    display: inline-block;
    width: ${({ fullWidth, width }) => (fullWidth ? `100%` : width)};
    ${({ marginvalue }) => marginvalue === `auto` && `margin-left:10px;margin-right:10px;`};
  }

  .MuiInputLabel-formControl {
    position: inherit;
  }

  label + .MuiInput-formControl {
    margin-top: 0;
  }
`;

const RenderMessageError = ({ t, enableValidation, label, errors }) => {
  if (enableValidation && label && errors[label]) {
    const message = `error:${errors[label]}`;
    return <FormHelperText id={errors[label]}>{t(message)}</FormHelperText>;
  }
  return <></>;
};

RenderMessageError.propTypes = {
  t: PropTypes.func.isRequired,
  enableValidation: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

const SelectBox = ({
  t,
  labelText,
  label,
  values,
  onChange,
  disabled,
  enableValidation,
  errors,
  required,
  children,
  variant,
  margin,
  fullWidth,
  width,
  ...rest
}) => {
  return (
    <Form
      margin={margin === `auto` ? `normal` : margin}
      variant={variant}
      fullWidth={fullWidth}
      error={!!errors[label]}
      width={fullWidth ? `` : width}
      marginvalue={margin}
    >
      <InputLabel htmlFor={label}>
        {labelText || `${t(label)}`}
        <strong>{required ? ` *` : ``}</strong>
      </InputLabel>
      <Select
        id={label}
        name={label}
        value={label ? values[label] : label}
        onChange={useCallback(event => {
          onChange(event, label);
        }, [])}
        aria-describedby={enableValidation && label && errors[label] ? errors[label] : ``}
        disabled={disabled}
        inputProps={{
          name: label,
          id: label,
        }}
        fullWidth
        {...rest}
      >
        {children}
      </Select>
      {RenderMessageError({ t, enableValidation, label, errors })}
    </Form>
  );
};

SelectBox.defaultProps = {
  labelText: ``,
  enableValidation: true,
  required: false,
  disabled: false,
  errors: {},
  onChange: () => {},
  label: ``,
  margin: `auto`, // enum: 'none' | 'dense' |'normal'
  variant: `standard`, // enum: 'standard' | ''
  fullWidth: false,
  width: `100%`,
};

SelectBox.propTypes = {
  t: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  enableValidation: PropTypes.bool,
  errors: PropTypes.shape({}),
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  width: PropTypes.string,
};

export default SelectBox;
