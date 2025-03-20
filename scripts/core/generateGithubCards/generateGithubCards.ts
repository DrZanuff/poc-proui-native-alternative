export function generateGithubCards(
  runtime: IRuntime,
  githubData: GitHubRepo[]
): IWorldInstance[] {
  return githubData.map((data) => {
    const newElement = runtime.objects.GitHubCardNative.createInstance(
      0,
      0,
      0,
      true,
      'githubCard'
    )
    newElement.instVars.repoName = data.name
    newElement.instVars.repoLanguage = data.language || ''
    newElement.instVars.repoUrl = data.html_url

    newElement.getOtherContainerInstances().forEach((element) => {
      // checar o se element é um HTMLElementURLNative
      if (element instanceof IHTMLElementInstance) {
        element.htmlContent = /*html*/ `
          <a
            href="${data.html_url}"
            class="limited-text"
            target="_blank"
            rel="noopener noreferrer">
            LINK
          </a>
        `
      }

      console.log(element.objectType.name)

      if (element.objectType.name === 'TextRepoNameNative') {
        ;(element as InstanceType.TextRepoNameNative).text = data.name
      }

      if (element.objectType.name === 'TextLanguageNative') {
        ;(element as InstanceType.TextLanguageNative).text = data.language || ''
      }
    })

    return newElement
  })
}
