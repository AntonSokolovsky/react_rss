import React, { useState } from 'react';
import styles from './InputAutoComplete.module.css';
import { ErrorsFields, IErrorsFields } from '../../validation/ErrorsFields';
import { IPropsAutoComplete } from './InputAutocomplete.type';

export default function InputAutoComplete({
  label,
  countries,
  error,
}: IPropsAutoComplete) {
  const [searchResult, setSearchResult] = useState<string[] | []>([]);
  const [isHideSearchResult, setIsHideSuggs] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handler: React.FormEventHandler<HTMLInputElement> = (event) => {
    setSearchResult(
      countries.filter((country) =>
        country.startsWith(event.currentTarget.value)
      )
    );
  };

  const handleChange: React.FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.currentTarget.value;
    setIsHideSuggs(false);
    setSelectedValue(input);
  };

  const hideList = (value: string) => {
    setSelectedValue(value);
    setIsHideSuggs(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label htmlFor="tag-input">{label}</label>
        <input
          style={{
            borderColor:
              ErrorsFields[error as keyof IErrorsFields] !== ' '
                ? 'red'
                : 'black',
          }}
          type="search"
          name="country"
          value={selectedValue}
          onChange={handleChange}
          onKeyUp={handler}
        />
      </div>

      <div
        className={styles.suggestions}
        style={{ display: isHideSearchResult ? 'none' : 'block' }}
      >
        {searchResult.map((item, index) => (
          <div
            key={'' + item + index}
            onClick={() => {
              hideList(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
