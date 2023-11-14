// import { render, fireEvent, act } from '@testing-library/react';
// import { useSearchValueContext } from '../../store';
// import Search from './SearchBar';
// import { vi } from 'vitest';

// // Mocking the useSearchValueContext hook
// vi.mock('../../store', () => ({
//   useSearchValueContext: vi.fn(() => ({
//     searchValue: '',
//     setSearchValue: vi.fn(),
//   })),
// }));

// // Mocking localStorage
// // const localStorageMock = {
// //   getItem: vi.fn(),
// //   setItem: vi.fn(),
// // };
// // vi.stubGlobal('localStorage', localStorageMock);
// const setItem = vi.fn();
// const getItem = vi.fn();
// const localStorageMock = { setItem, getItem };
// vi.stubGlobal('localStorage', localStorageMock);

// describe('Search component', () => {
//   test('Clicking the Search button saves the entered value to local storage', () => {
//     const searchValue = 'Test Value';
//     const { getByText, getByRole } = render(<Search />);

//     // Simulate entering a search value
//     fireEvent.change(getByRole('textbox'), { target: { value: searchValue } });

//     // Simulate clicking the search button
//     act(() => {
//       fireEvent.click(getByText('search'));
//     });

//     // Check if setSearchValue is called with the correct argument
//     expect(useSearchValueContext().setSearchValue).toHaveBeenCalledWith(
//       searchValue
//     );

//     // Check if the value is saved to local storage
//     expect(localStorage.setItem).toHaveBeenCalledWith(
//       'searchValue',
//       searchValue
//     );
//   });

//   test('Component retrieves the value from local storage upon mounting', () => {
//     const searchValue = 'Test Value';

//     // Mocking localStorage.getItem to return the test value
//     // localStorage.getItem.mockReturnValueOnce(searchValue);

//     render(<Search />);

//     // Check if the value is retrieved from local storage upon mounting
//     expect(useSearchValueContext().searchValue).toBe(searchValue);
//   });
// });
