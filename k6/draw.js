import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 50,
  duration: '50s',
};
export default function () {
  http.get('https://deckofcardsapi.com/api/deck/1/draw/?count=1');
}
