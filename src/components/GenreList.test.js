import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreList from './GengeList';

describe('GenreList component', () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Horror'];
  const selectedGenre = 'Comedy';
  const onChange = jest.fn();

  it('should render all genres passed in props', () => {
    const { getAllByRole } = render(
        <GenreList genres={genres} selectedGenre={selectedGenre} onChange={onChange} />
      );
      const genreItems = getAllByRole('listitem');
      expect(genreItems).toHaveLength(4);
  });

  it('should highlight a selected genre passed in props', () => {
    render(<GenreList genres={genres} selectedGenre={selectedGenre} onChange={onChange} />);
    const selectedButton = screen.getByText(selectedGenre);
    expect(selectedButton).toHaveClass('selected');
  });

  it('should call onChange callback with correct genre after click event on genre button', () => {
    const { getByText } = render(
        <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={onChange} />
      );
      const comedyButton = getByText('Comedy');
      fireEvent.click(comedyButton);
      expect(onChange).toHaveBeenCalledWith('Comedy');
  });
});
