import assert from 'node:assert/strict';
import MovieDTO from '../src/shared/DTO/MovieDTO.ts';

const input = [{
  imdbID: '1',
  Title: 'Test',
  Year: '2024',
  Genre: 'Action',
  Plot: 'test',
  Poster: 'img',
  Director: 'Me',
  Awards: 'none'
}];

const movies = MovieDTO.DtoToClass(input);
assert.equal(movies[0].title, 'Test');
console.log('MovieDTO test passed');
