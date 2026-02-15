import { useMutation, useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { sessionAPI } from '../api/session.js'

export const useCreateSession = () => {
  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionAPI.createSession,
    onSuccess: () => toast.success("Session Created Successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to create Session")
  })

  return result;
}

export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionAPI.getActiveSessions
  })

  return result;
}

export const useMyRecentSessions = () => {
  const result = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionAPI.getMyRecentSessions
  })

  return result;
}

export const useSessionById = (id) => {
  const result = useQuery({
    queryKey: ["sessionById", id],
    queryFn: () => sessionAPI.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000 // refetch every 5 seconds.
  })

  return result;
}

export const useJoinSession = () => {
  return useMutation({
    mutationKey: ["joinSession"],
    mutationFn: sessionAPI.joinSession,
    onSuccess: () => toast.success("Joined Session Successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to join Session")
  })
}

export const useEndSession = () => {
  return useMutation({
    mutationKey: ["endSession"],
    mutationFn: sessionAPI.endSession,
    onSuccess: () => toast.success("Session Ended Successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to end Session")
  })
}