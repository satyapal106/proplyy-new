'use client';
import { useState, useEffect } from 'react';

// Counter Component
const Counter = ({ endValue, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const start = 0;
        const end = endValue;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        let current = start;

        const timer = setInterval(() => {
            current += 1;
            setCount(current);

            if (current >= end) {
                clearInterval(timer);
                setCount(end);
            }
        }, stepTime);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [endValue, duration]);

    return (
        <div className="counter-value">
            {count}
        </div>
    );
};

// CounterSection Component
const CounterSection = () => {
    return (
        <div className="counter-setion">
            <div className="container">
                <div className="row">
                    <div className="col col-md-3 col-sm-6">
                        <div className="counter">
                            <h3>Web Development</h3>
                            <Counter endValue={515} duration={3500} />
                        </div>
                    </div>
                    <div className="col col-md-3 col-sm-6">
                        <div className="counter pink">
                            <h3>Web Development</h3>
                            <Counter endValue={487} duration={3500} />
                        </div>
                    </div>
                    <div className="col col-md-3 col-sm-6">
                        <div className="counter pink">
                            <h3>Web Development</h3>
                            <Counter endValue={100} duration={3300}/>
                        </div>
                    </div>
                    <div className="col col-md-3 col-sm-6">
                        <div className="counter pink">
                            <h3>Web Development</h3>
                            <Counter endValue={100} duration={3300}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
