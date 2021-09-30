import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const resultObject = {};
  for(let domain of domains) {
    let dnsArray = domain.split('.').reverse();
    dnsArray.reduce((previous, current) => {
      const dns = previous + '.' + current;
      if (resultObject[dns]) {
        resultObject[dns] += 1;
      } else {
        resultObject[dns] = 1;
      }
      return dns;
    }, '');
  }
  return resultObject;
}
