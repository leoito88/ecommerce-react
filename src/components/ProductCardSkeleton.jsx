import { Skeleton, Stack } from '@mui/material';

export default function ProductCardSkeleton() {
  return (
    <Stack spacing={2} sx={{margin: "15px"}}>
        <Skeleton variant="rounded" width={280} height={250} />
        <Skeleton variant="rounded" width={280} height={20} />
        <Skeleton variant="rounded" width={280} height={30} />
    </Stack>
  )
}