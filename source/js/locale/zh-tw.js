/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.debug = false;
	VMM.Language = {
		lang: "zh-tw",
		api: {
			wikipedia: "zh"
		},
		date: {
			month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			month_abbr: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			day: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
			day_abbr: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d mmm",
			full: "d mmmm yyyy",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'d mmmm yyyy'</small>'",
			full_long: "dddd',' d mmm yyyy 'um' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'dddd',' d mmm yyyy'</small>'",
		},
		messages: {
			loading_timeline: "Loading Timeline... ",
			return_to_title: "Return to Title",
			expand_timeline: "Expand Timeline",
			contract_timeline: "Contract Timeline",
			wikipedia: "From Wikipedia, the free encyclopedia",
			loading_content: "Loading Content"
			
		}
	}
}
