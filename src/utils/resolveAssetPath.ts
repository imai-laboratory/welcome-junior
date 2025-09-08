export const useResolveAssetPath = (p: string) =>
	import.meta.env.BASE_URL + p.replace(/^\/+/, '');
