export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f58f4739fbfdd57a5fe04a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xhjqan8w',
                  apiId: '5981eca6-3cc9-46aa-8920-421e90663786'
                },
                {
                  buildHookId: '5f58f4737921e54612689c0b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e7oqn19y',
                  apiId: 'fb52e6a3-a3b2-4b5c-ae58-ef76c0f0e7d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saviourborg/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e7oqn19y.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
