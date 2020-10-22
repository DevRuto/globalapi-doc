module.exports = {
  '/mapping/': [
    {
      title: 'Releases',
      collapsable: true,
      children: [
        ['release/sep072020', 'September 7, 2020'],
        ['release/oct022020', 'October 2, 2020']
      ]
    },
    {
      title: 'Mapping',
      collapsable: false,
      children: [
        ['map-rules', 'Rules']
      ]
    },
  ],
  '/guides/': [
    {
      title: 'Map Guides',
      collapsable: false,
      children: [
        'map-approval'
      ]
    },
    {
      title: 'Server Guides',
      collapsable: false,
      children: [
        'install-gokz',
        'install-kztimer'
      ]
    }
  ]
}