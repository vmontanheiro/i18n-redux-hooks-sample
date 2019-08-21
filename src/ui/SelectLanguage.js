import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { setApp } from '../redux/actions';
import SelectBox from './SelectBox';

const Option = styled(MenuItem)`
  && {
    display: flex;
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SelectLanguageComponent = () => {
  const { language } = useSelector(state => ({ language: state.App.language }), shallowEqual);
  const { t } = useTranslation(`language`);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({
    values: {
      language,
    },
  });

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setSelected({
        values: {
          language: value,
        },
      });
      dispatch(
        setApp({
          language: value,
        }),
      );
    },
    [selected],
  );

  const [languages] = useState([
    {
      value: `pt_BR`,
      label: `portuguese`,
    },
    {
      value: `en_US`,
      label: `english`,
    },
    {
      value: `es`,
      label: `spanish`,
    },
  ]);

  return (
    <SelectBox
      margin="normal"
      labelText={t(`choose_language`)}
      label="language"
      values={selected.values}
      onChange={handleChange}
      inputProps={{
        name: `language`,
        id: `language`,
      }}
      t={t}
    >
      {languages.map(lng => (
        <Option key={lng.value} value={lng.value} selected={lng.value === selected.values.language}>
          <Item>
            <span>{t(lng.label)}</span>
          </Item>
        </Option>
      ))}
    </SelectBox>
  );
};

export default SelectLanguageComponent;
