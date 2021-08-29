import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos' //custom hook!

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('buildings')

    useEffect((params) => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
            <div className="ui container">
                <SearchBar onFormSubmit={search} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default App