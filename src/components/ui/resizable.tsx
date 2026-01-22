// "use client"

// import * as React from "react"
// import { GripVerticalIcon } from "lucide-react"
// import * as ResizablePrimitive from "react-resizable-panels"

// import { cn } from "@/lib/utils"

// function ResizablePanelGroup({
//   className,
//   ...props
// }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
//   return (
//     <ResizablePrimitive.PanelGroup
//       data-slot="resizable-panel-group"
//       className={cn(
//         "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function ResizablePanel({
//   ...props
// }: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
//   return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
// }

// function ResizableHandle({
//   withHandle,
//   className,
//   ...props
// }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
//   withHandle?: boolean
// }) {
//   return (
//     <ResizablePrimitive.PanelResizeHandle
//       data-slot="resizable-handle"
//       className={cn(
//         "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
//         className
//       )}
//       {...props}
//     >
//       {withHandle && (
//         <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
//           <GripVerticalIcon className="size-2.5" />
//         </div>
//       )}
//     </ResizablePrimitive.PanelResizeHandle>
//   )
// }

// export { ResizablePanelGroup, ResizablePanel, ResizableHandle }



// "use client"

// import * as React from "react"
// import { GripVerticalIcon } from "lucide-react"
// // 1. Change this import
// import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels"

// import { cn } from "@/lib/utils"

// function ResizablePanelGroup({
//   className,
//   ...props
// }: React.ComponentProps<typeof PanelGroup>) { // 2. Remove "ResizablePrimitive."
//   return (
//     <PanelGroup
//       data-slot="resizable-panel-group"
//       className={cn(
//         "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function ResizablePanel({
//   ...props
// }: React.ComponentProps<typeof Panel>) { // 3. Remove "ResizablePrimitive."
//   return <Panel data-slot="resizable-panel" {...props} />
// }

// function ResizableHandle({
//   withHandle,
//   className,
//   ...props
// }: React.ComponentProps<typeof PanelResizeHandle> & { // 4. Remove "ResizablePrimitive."
//   withHandle?: boolean
// }) {
//   return (
//     <PanelResizeHandle
//       data-slot="resizable-handle"
//       className={cn(
//         "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
//         className
//       )}
//       {...props}
//     >
//       {withHandle && (
//         <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
//           <GripVerticalIcon className="size-2.5" />
//         </div>
//       )}
//     </PanelResizeHandle>
//   )
// }

// export { ResizablePanelGroup, ResizablePanel, ResizableHandle }



"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
// 1. Updated Named Imports
import { Group, Panel, Separator } from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof Group>) { // 2. Changed to Group
  return (
    <Group
      data-slot="resizable-panel-group"
      className={cn(
        // Note: The library now uses 'data-panel-group-orientation'
        "flex h-full w-full data-[panel-group-orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof Panel>) {
  return <Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & { // 3. Changed to Separator
  withHandle?: boolean
}) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-orientation=vertical]:h-px data-[panel-group-orientation=vertical]:w-full data-[panel-group-orientation=vertical]:after:left-0 data-[panel-group-orientation=vertical]:after:h-1 data-[panel-group-orientation=vertical]:after:w-full data-[panel-group-orientation=vertical]:after:translate-x-0 data-[panel-group-orientation=vertical]:after:-translate-y-1/2 [&[data-panel-group-orientation=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </Separator>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }