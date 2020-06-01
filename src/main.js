// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.meta.push({
    name: 'keywords',
    content: 'Software,Developer,Las Vegas,Python,Cloud'
  })
  head.meta.push({
    name: 'description',
    content: 'Resume of Software Engineer with 5 years experience seeking a job in the Las Vegas area'
  })
}
