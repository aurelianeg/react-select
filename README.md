# @aurelianeg/react-select

This project is a React component to create a custom select dropdown.

There are different parameters as props:
- id (String): ID name for the select,
- options (Array): array of selectable options (a list element is created for each option in array),
- abbreviations (Boolean): true if options are objects with name and abbreviation properties / false if option array is simple

If the array of options has objects with abbreviations, get only the name as title and only the abbreviation as value (which can be saved in Redux). This allows to have a simple array (no objects) as 'options' too.

Before any selection, the displayed option on text button is the first option of options' array.
A "value" attribute has been created on text button (which has the id) to easily get the selected option value.

If the button is clicked, the options list is shown and each option is accessible with keyboard.
If an option is selected/clicked, the text button is updated and the options list is hidden.

## Installation

In your project directory, you can run the following command to install the npm package:

```sh
npm install @aurelianeg/react-select
```

## Import and use

In your React component or page, you can import the React component from the installed npm package:

`import Select from '@aurelianeg/react-select';`

Then, you can use your imported component, for example:

`<Select id="YOUR_ID" options={YOUR_OPTIONS_ARRAY} abbreviations={false} />`



