export default `
  # Using VTEX Styleguide

  To use **VTEX Styleguide**, you first need to add it as a dependency in your app's \`manifest.json\`

  \`\`\`json
  {
    "dependencies": {
      "vtex.styleguide": "8.x"
    }
  }
  \`\`\`

  after adding it as a dependency, you can import components from **Styleguide** in React components like so:

  \`\`\`tsx
  import React from 'react'
  import { Button } from 'vtex.styleguide'

  const MyAwesomeComponent: React.SFC = () => (
    <Button>Click me</Button>
  )
  \`\`\`

  The code above is shown running below:
`
