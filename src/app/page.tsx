import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Playlist } from "@/components/mediaitems/playlist"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center items-center bg-neutral-700">
      <div className="z-10 h-screen w-screen">
        <ResizablePanelGroup
          direction="horizontal"
        >
          <ResizablePanel defaultSize={20}> {/* BOX ONE */}
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>



          <ResizableHandle/>



          <ResizablePanel defaultSize={75}> {/* BOX TWO */}
            
            <ScrollArea className="h-screen">
              <div className="flex m-1 mr-3 items-center justify-center">
                <Playlist amount={17}></Playlist>
              </div>
            </ScrollArea>

          </ResizablePanel>


          <ResizableHandle/>



          <ResizablePanel defaultSize={20}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Four</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>

      </div>
    </main>
  )
}
