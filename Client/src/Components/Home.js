import React , {useState,useEffect, Fragment} from 'react'
import { useTransition, animated, config,useSpring } from 'react-spring'
import '../styles.css'
const slides = [
    { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
    { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
    { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
  ]
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Home() {
    const [index, setIndex] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 4), 2000), [])
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
      <Fragment>
      <h1 className="text-center mt-5">Contact Keeper </h1>
    <div className="container1">
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
        {
            transitions.map(({ item, props, key }) => (
                <animated.div
                  key={key}
                  class="bg"
                  style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
                />
              ))
        }
        </animated.div>
    </div>
    </Fragment>
  )
}

export default Home;
