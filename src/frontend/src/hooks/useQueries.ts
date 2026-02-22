import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Brand, VirtualAssistantProvider } from '../backend';

export function useGetAllBrands() {
  const { actor, isFetching } = useActor();

  return useQuery<Brand[]>({
    queryKey: ['brands'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBrands();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProvidersSortedByPayment() {
  const { actor, isFetching } = useActor();

  return useQuery<VirtualAssistantProvider[]>({
    queryKey: ['providers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProvidersSortedByPayment();
    },
    enabled: !!actor && !isFetching,
  });
}
