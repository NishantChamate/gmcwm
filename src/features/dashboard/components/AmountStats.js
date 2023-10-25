

function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Amount to be Collected</div>
                <div className="stat-value">₹20,48,000</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Users</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Cash in hand</div>
                <div className="stat-value">₹45,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Members</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats