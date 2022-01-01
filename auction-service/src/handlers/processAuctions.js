import createError from 'http-errors';

import { getEndedAuctions } from '../lib/getEndedAuctions';
import { closeAuction } from '../lib/closeAuction';

async function processAuctions(event, context) {
  try {
    const auctionsToClose = await getEndedAuctions();
    const closePromises = auctionsToClose.map((auction) => {
      return closeAuction(auction);
    });
    await Promise.all(closePromises);

    // don't return normal http response code because processAuctions is
    // a scheduled handler and not triggered via API Gateway.
    return { closed: closePromises.length };
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
}

export const handler = processAuctions;
