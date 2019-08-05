export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d481f3bda1f7a765020ecd3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pzwa7ytu',
                  apiId: '6998a833-c176-4709-8abc-1e1c90662633'
                },
                {
                  buildHookId: '5d481f3b29796d171c6cf485',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n8mzs8gd',
                  apiId: '1301e265-9270-4aad-ae49-99e394003f8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brendanmicallef/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n8mzs8gd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
