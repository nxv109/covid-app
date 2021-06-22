import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import "./CountryPicker.css";

export default function CountryPicker({ handleChangeCountry }) {
  const [countries, setCountries] = useState(Array);

  useEffect(() => {
    const fetchData = async () => {
      setCountries(await fetchCountries());
    };

    fetchData();
  }, []);

  return (
    <section className="mt-2 mb-2 countryPicker">
      <h2>Country Picker</h2>
      <FormControl>
        <NativeSelect onChange={(e) => handleChangeCountry(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </section>
  );
}
