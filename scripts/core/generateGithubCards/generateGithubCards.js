export function generateGithubCards(runtime, githubData) {
    return githubData.map((data) => {
        const newElement = runtime.objects.GitHubCardNative.createInstance(0, 0, 0, true, 'githubCard');
        newElement.instVars.repoName = data.name;
        newElement.instVars.repoLanguage = data.language || '';
        newElement.instVars.repoUrl = data.html_url;
        newElement.getOtherContainerInstances().forEach((element) => {
            if (element instanceof IHTMLElementInstance) {
                element.htmlContent = `
          <a
            href="${data.html_url}"
            class="limited-text"
            target="_blank"
            rel="noopener noreferrer">
            LINK
          </a>
        `;
            }
            console.log(element.objectType.name);
            if (element.objectType.name === 'TextRepoNameNative') {
                ;
                element.text = data.name;
            }
            if (element.objectType.name === 'TextLanguageNative') {
                ;
                element.text = data.language || '';
            }
        });
        return newElement;
    });
}
