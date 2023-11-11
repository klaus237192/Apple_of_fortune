var string_id = 1231414;
var page_title = document.title;
function sender_cheker(min, max) 
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


    window.onload = function() {
		
		//$('div[class="jackpot"]').append('<img src="https://i.ibb.co/YtkhpFL/logo.png" alt="Thimbles" width="70" height="49" class="thimbles-logo__image">');
		
        document.onclick = ({target}) => {
			page_title = document.title;
			console.log(page_title);
			if (page_title.indexOf('Apple Of Fortune') !== -1)
			{
				let parent = target;
				clas_name_parent = parent.parentNode.parentNode.className;
				if (clas_name_parent == "fortune-apple-bet__btn fortune-apple-btn fortune-apple-btn--bet")
				{
					arry_apple_start = creete_new_str();
					
					$('.image_dop_for_provide').remove();
					setInterval(print_result_apple,1000);
				}
			}
        }

        function creete_new_str()
        {
			var summ_true_apple      = new Array();
			var summ_false_apple     = new Array();
			var array_good_bed_apple = new Array();
			
			summ_true_apple[0] = 4;
			summ_true_apple[1] = 4;
			summ_true_apple[2] = 4;
			summ_true_apple[3] = 4;
			summ_true_apple[4] = 3;
			summ_true_apple[5] = 3;
			summ_true_apple[6] = 3;
			summ_true_apple[7] = 2;
			summ_true_apple[8] = 2;
			summ_true_apple[9] = 1;
			
			summ_false_apple[0] = 1;
			summ_false_apple[1] = 1;
			summ_false_apple[2] = 1;
			summ_false_apple[3] = 1;
			summ_false_apple[4] = 2;
			summ_false_apple[5] = 2;
			summ_false_apple[6] = 2;
			summ_false_apple[7] = 3;
			summ_false_apple[8] = 3;
			summ_false_apple[9] = 4;
	
            var napravlen = 0;
			for(i=0;i<10;i++)
			{
				array_good_bed_apple[i] = new Array();
				if (napravlen == 0)
				{
					for(k=0;k<5;k++)
					{
						var rand_var_for_this = coinToss();
				
						if (rand_var_for_this == true)
						{
							if (summ_true_apple[i] > 0)
							{
								array_good_bed_apple[i][k] = 1;
								summ_true_apple[i] --;
							}
							else
							{
								array_good_bed_apple[i][k] = 0;
								summ_false_apple[i] --;
							}
						}
						else
						{
							if (summ_false_apple[i] > 0)
							{
								array_good_bed_apple[i][k] = 0;
								summ_false_apple[i] --;
							}
							else
							{
								array_good_bed_apple[i][k] = 1;
								summ_true_apple[i] --;
							}
						}
					}
				}
				else
				{
					for(k=4;k>=0;k--)
					{
						var rand_var_for_this = coinToss();
				
						if (rand_var_for_this == true)
						{
							if (summ_true_apple[i] > 0)
							{
								array_good_bed_apple[i][k] = 1;
								summ_true_apple[i] --;
							}
							else
							{
								array_good_bed_apple[i][k] = 0;
								summ_false_apple[i] --;
							}
						}
						else
						{
							if (summ_false_apple[i] > 0)
							{
								array_good_bed_apple[i][k] = 0;
								summ_false_apple[i] --;
							}
							else
							{
								array_good_bed_apple[i][k] = 1;
								summ_true_apple[i] --;
							}
						}
					}
				}
				
				if (napravlen == 0)
					napravlen = 1;
				else
					napravlen = 0;
			}
			
			return array_good_bed_apple;
        }
		
		function print_result_apple()
        {		
			var row_naw = $('div[class="fortune-apple-field__row fortune-apple-row fortune-apple-row--is-active"] button',0).attr('data-item').split('-');
			
			var ind = -1;
			for(i=0;i<10;i++)
			{
				if (i == 0)
					ind = 9;
				if (i == 1)
					ind = 8;
				if (i == 2)
					ind = 7;
				if (i == 3)
					ind = 6;
				if (i == 4)
					ind = 5;
				if (i == 5)
					ind = 4;
				if (i == 6)
					ind = 3;
				if (i == 7)
					ind = 2;
				if (i == 8)
					ind = 1;
				if (i == 9)
					ind = 0;
				
				if (row_naw[0] == ind)
				{
					$('.image_dop_for_provide').remove();
					for(k=0;k<5;k++)
					{
						if (arry_apple_start[i][k] == 1)
							$('button[data-item="'+ind+'-'+k+'"]').html('<img class="image_dop_for_provide" src="https://i.ibb.co/WtvVkbC/apple-t-f.png" style="opacity: 0.4; width:100%">');
						else
							$('button[data-item="'+ind+'-'+k+'"]').html('<img class="image_dop_for_provide" src="https://i.ibb.co/ZWfxcY9/apple-f-t.png" style="opacity: 0.4; width:100%">');
					}
				}
			}			
		}
		
		function coinToss() 
		{
			return (Math.floor(Math.random() * 2) === 0);
		}
    };