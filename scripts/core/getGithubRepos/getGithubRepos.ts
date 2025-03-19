type GitHubRepo = {
  name: string
  language: string | null
  html_url: string
}

async function fetchGitHubRepos(
  username: string,
  quantity: number
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    )

    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`)
      return []
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      return []
    }

    return data.slice(0, quantity).map((repo) => ({
      name: repo.name,
      language: repo.language,
      html_url: repo.html_url,
    }))
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return []
  }
}
