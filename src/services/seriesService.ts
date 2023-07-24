import { api } from './config'

const listAllSeries = (page: number) =>
  api.get(`/shows?page=${page}`)

const searchSeriesByName = (query: string) =>
  api.get(`/search/shows?q=${query}`)

const detailsOfSeries = (showId: string) =>
  api.get(`/shows/${showId}`)

const getAllEpisodesBySerie = (showId: string) =>
  api.get(`/shows/${showId}/episodes`)

const detailsOfEpisode = (episodeId: string) =>
  api.get(`/episodes/${episodeId}`)

export default {
  listAllSeries,
  searchSeriesByName,
  getAllEpisodesBySerie,
  detailsOfSeries,
  detailsOfEpisode,
}
