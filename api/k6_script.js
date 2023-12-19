import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 50,
  duration: '50s',
};
export default function () {
  http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  
}

import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 50,
  duration: '50s',
};
export default function () {
  http.get('https://deckofcardsapi.com/api/deck/1/draw/?count=1');

}

import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 50,
  duration: '50s',
};
export default function () {
  http.get('https://deckofcardsapi.com/api/deck/1/shuffle/?remaining=true')

}

import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 50,
  duration: '50s',
};
export default function () {
  http.get('https://deckofcardsapi.com/api/deck/1/return/?cards=AS,2S');
  sleep(1);
}

import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 50,
  duration: '50s',
};
export default function () {
  http.get('https://deckofcardsapi.com/api/deck/new/');
 
}
