import Router from '@/router/index'

export function goToPage(url) {
  Router.push({
    path: url
  })
}

export default {
  goToPage,
}