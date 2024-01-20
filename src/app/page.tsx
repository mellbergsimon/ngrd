import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Playlist } from "@/components/mediaitems/playlist"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center items-center bg-gradient-to-r to-pink-400 from-indigo-500">
      <div className="z-10 h-screen w-screen">
        <ResizablePanelGroup
          direction="horizontal"
        >
          <ResizablePanel defaultSize={20}> {/* BOX ONE */}
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}> {/* BOX TWO */}
            
              <div className="flex m-5 items-center justify-center">
                <Playlist amount={3}></Playlist>
              </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={20}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>

      </div>
    </main>
  )
}
