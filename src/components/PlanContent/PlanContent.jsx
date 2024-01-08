import "./PlanContent.css"

export const PlanContent = () => {
    return (
        <div className="plan">
        <img src="" alt="" className="plan_image" />
        <div className="plan_chooser">
          <p className="plan_type">Annual plan</p>
          <p className="plan_cost">$59.99/year</p>
        </div>
        <button className="plan_changer">Change</button>
      </div>
    )
}