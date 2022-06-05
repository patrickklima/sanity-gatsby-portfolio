export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '629d3d680db4082315ce3df5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-768de62m',
                  apiId: 'aa3b4b78-2985-4a7c-801f-c59d47260b2a'
                },
                {
                  buildHookId: '629d3d682ef5251f035a29f7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5wrdsuka',
                  apiId: 'f2d7b6c6-9694-4fc2-9840-080a5d923c06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patrickklima/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5wrdsuka.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
