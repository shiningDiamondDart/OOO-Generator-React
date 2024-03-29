import { useState } from 'react'
import React from 'react'
import ViewModel from '../../ViewModels/ReccurencePattern/Selection'

import DayWeek from '../../Views/ReccurencePattern/DayWeek'
import { ViewModel as DayWeekViewModel } from '../../ViewModels/ReccurencePattern/DayWeek'

import Month from '../../Views/ReccurencePattern/Month'
import { ViewModel as MonthViewModel } from '../../ViewModels/ReccurencePattern/Month'

import Day from '../../Views/ReccurencePattern/Day'
import { ViewModel as DayViewModel } from '../../ViewModels/ReccurencePattern/Day'
import '../Landing.css'

interface SelectionViewProps {
    viewModel: ViewModel
}

const Selection: React.FC<SelectionViewProps> = ({ viewModel }) => {

    const [HideDaily, _SetHideDaily] = useState(viewModel.HideDaily);
    const SetHideDaily = (HideDaily : boolean) => {
        viewModel.HideDaily = !viewModel.HideDaily
        _SetHideDaily(HideDaily)
    }
    const [HideWeekly, _SetHideWeely] = useState(viewModel.HideWeekly);
    const SetHideWeekly = (HideWeekly: boolean) => {
        viewModel.HideWeekly = !viewModel.HideWeekly
        _SetHideWeely(HideWeekly)
    }
    const [HideMonthly, _SetHideMonthly] = useState(viewModel.HideMonthly);
    const SetHideMonthly = (HideMonthly: boolean) => {
        viewModel.HideMonthly = !viewModel.HideMonthly
        _SetHideMonthly(HideMonthly)
    }
    const [HideYearly, _SetHideYearly] = useState(viewModel.HideYearly);
    const SetHideYearly = (HideYearly: boolean) => {
        viewModel.HideYearly = !viewModel.HideYearly
        _SetHideYearly(HideYearly)
    }
    
    /*const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == "Daily") {
            setHideDaily(!HideDaily);
        }

    }*/
    
    return (
        <>
            <div className="flex-container-horizontal">
            <div className="flex-container-vertical">
                    <div className="reccurence-pattern">
                        <input name="Option" type="radio" id="Daily" checked={!viewModel.HideDaily} onChange={() => SetHideDaily(!HideDaily)}></input>Daily</div>
                    <div className="reccurence-pattern">
                        <input name="Option" type="radio" id="Weekly" checked={!viewModel.HideWeekly} onChange={() => SetHideWeekly(!HideWeekly)}></input>Weekly</div>
                    <div className="reccurence-pattern">
                        <input name="Option" type="radio" id="Monthly" checked={!viewModel.HideMonthly} onChange={() => SetHideMonthly(!HideMonthly)}></input>Monthly</div>
                    <div className="reccurence-pattern">
                        <input name="Option" type="radio" id="Yearly" checked={!viewModel.HideYearly} onChange={() => SetHideYearly(!HideYearly)}></input>Yearly</div>
                </div>
            <div className="spacer"></div>
            <div hidden={viewModel.HideWeekly}>
                <DayWeek viewModel={new DayWeekViewModel()} />

            </div>
            <div hidden={viewModel.HideMonthly}>
                <Month viewModel={new MonthViewModel()} />

            </div>
            <div hidden={viewModel.HideDaily}>
                <Day viewModel={new DayViewModel()} />

            </div>
        </div>
            
            

        </>
    )
}

export default Selection