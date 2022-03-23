import { FC } from 'react'

const Loading: FC = () => {
    // cusing tailwind create a white translucent animated loading spinner svg
    return (
        <div className="h-full w-full flex justify-center items-center">
            <svg
                className="animate-spin"
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className="path"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                ></circle>
            </svg>
        </div>
    )
}

export default Loading
