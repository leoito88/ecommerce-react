import { Skeleton } from '@mui/material';

export default function ProductSkeleton() {
  return (
    <>
<div style={{ display: "flex",justifyContent: "flex-end" , gap: "40px" }}>
  <Skeleton variant="rounded" width={400} height={500} />
  <div style={{ display: "flex", flexDirection: "column", alignItems:"right", paddingBottom: "50px" }}>
    <br></br>
    <br></br>
    <br></br>
    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
    <Skeleton variant="rounded" width={680} height={50} />
    </div>

    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Skeleton variant="rounded" width={380} height={50} />
    </div>
    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Skeleton variant="rounded" width={240} height={30} />
    </div>
    
    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Skeleton variant="rounded" width={530} height={20} />
    </div>

    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Skeleton variant="rounded" width={570} height={20} />
    </div>

    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Skeleton variant="rounded" width={500} height={20} />
    </div>

    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Skeleton variant="rounded" width={510} height={20} />
    </div>
    <br></br>
    <br></br>
    <div style={{ marginTop: "10px", marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Skeleton variant="rounded" width={170} height={50} />
    </div>
  </div>
</div>
    </>
  )
}