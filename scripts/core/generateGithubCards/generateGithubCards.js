export function generateGithubCards(runtime, githubData) {
    return githubData.map((data) => {
        const newElement = runtime.objects.GitHubCardNative.createInstance(0, 0, 0, false, 'githubCard');
        newElement.instVars.repoName = data.name;
        newElement.instVars.repoLanguage = data.language || '';
        newElement.instVars.repoUrl = data.html_url;
        return newElement;
    });
}
