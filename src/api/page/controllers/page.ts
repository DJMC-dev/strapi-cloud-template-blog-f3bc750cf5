/**
 * page controller
 */

import { factories } from '@strapi/strapi'
import  * as qs from 'qs'
export default factories.createCoreController('api::page.page')//, ({ strapi }) => ({
//     async find(ctx) {
//         const queryPages = qs.stringify(   {     populate: {       sections: {         populate: "*",       },     },   },   {     encodeValuesOnly: true,  } );
//       return {queryPages };
//     },
   
//     // async findOne(ctx) {
//     //   ctx.query = {
//     //     ...ctx.query,
//     //     populate: '*',
//     //   };
   
//     //   const { data } = await super.findOne(ctx);
//     //   return { data };
//     // },
//   }));