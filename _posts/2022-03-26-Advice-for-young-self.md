---
layout: post
author: joklek
title: "What I would tell myself if I got sudden amnesia and then wanted to get into software engineering after it"
---

(The alternative title for this post is "Advice that I would give for a younger self")

I've been working as a software engineer for close to 4 years, and I want to share some bits of knowledge or just plain old pieces of advice that I've gathered over this time. It's not a monumental amount of time, and I'm in no way a guru in this field, but I hope that these insights might be at least relatable for someone.

And just before I start, I know that this topic has been explored [^1] [^2] [^3] [^4] quite extensively, but I want to share my own take on this. It helps me to sleep better.

# The Advice

**DISCLAIMER**: When writing this blog post, it quickly balooned out of scope when I wrote a total of 21 "suggestions". It was hard to read even for me, so ultimately I grouped them up and split into different sections. 

## General advice

1. **Software engineering is not only about the code** and technology, **but it's also about the people**. You might need to have full days of meetings, you might need to align technical details with other teams or your own teammates. Some days might even just consist of venting out with coworkers, but that's also work! For an organisation to function, the people have to be alive and communicate to each other. No tool is going to replace communication needed to finish a task.
2. **Don't be afraid of asking questions**. It's better to try to figure stuff out for 35 minutes and then ask for help, than to spend a day walking in circles. This time probably depends on your seniority and other minor details, but in essence - try hard, but if it doesn't work, try talking to other people. Even if they don't know the answer, just explaining what you don't understand might help you find the way.
3. **Create a routine for yourself**. For example, your first hour of work can be for catchup (email, slack, teams, etc.) and blogs, only then for work. Don't forget to do breaks, let your brain relax a bit. Even when working from home, take the time to walk off the desk, look out of your window, water your plants - anything works.
4. When tackling a difficult task, especially in cases where you don't understand the scope, try to allocate some time to "**divide and conquer**" it. Look around the code, try to write down observations and possible steps and solutions. These steps then can be later converted to subtickets or plain old checklist, for you not to miss anything.
5. **Don't forget to challenge the truths given by your superiors**. Sometimes this reveals cracks in the processes, sometimes not, either way it's good to have a deeper understanding of the business logic.
6. **Try to avoid context switching**. Sure, you look like a leet hacker that way, but most of the time you will manage to cover only the surface level information. At least for me, context switching results in fatigue and I lose the ability to focus.
7. **Do grunt work and automate**. Doing things manually might provide you some insights on how things could be automated. Doing things that no one wants to do will improve the life for you and others, and you might uncover issues that lurked in the dark for quite some time[^5].
8. **Prioritize tasks and have a backlog of stuff you want to do**. Dropping stuff just because it looks interesting is not always the best approach, especially when you have a fire in the house. Write that stuff down, create tickets. This increases the chances of it being completed and not forgotten. Even if that issue will be tackled not by you, it won't be lost to time and found at the worst moment. 
9. **Take care of tech debt** iff your situation and processes allow it, try to . Allocate some time for misc fixes of problems in your backlog. Outdated dependencies? Broken formatting? Mystery log entries? Flaky alerts? Easy to fix Sonar issues? Be a good scout, make the code look better than the code before you.
10. **Do not underestimate yourself**. I know "junior" developers who have 3 years of experience and they have adequate capabilities, but they tend to undervalue themselves, thus reducing their observed value and even capacity. The truth is that everyone googles things, everyone forgets things, most people say inaccurate things, oh and everyone makes mistakes. Even if you don't have a full picture of some issue, you might have some useful insights.

## Feedback related advice

11. **Give feedback to others**. You can do it personally, you can give the feedback to your manager (or the other person's manager, if managers are not shared), you can do it during standups (Thank you X, for helping me with Y, it was nice learning from you). Write stuff down as you go, it will be really useful on your colleagues periodic review or when someone comes up to you asking for feedback. Being able to provide good and bad stuff from not only the recent periods is handy. Just remember, giving feedback is a skill which you have to learn. Try to be constructive, provide examples of actions and results. Be thoughtful. Even negative constructive feedback is good feedback.
12. **Ask for feedback**. I find it useful to personally ask feedback from my peers, or senior developers after a big task, or every few months. Firstly. This encourages people to give feedback to you and to others. They might notice that it's not as scary as it feels at first. Secondly, you might hear some things that you don't expect. Be it negative, be it positive - it's hard to see yourself from the side and evaluate your shortcommings and strengths. Maybe you're a great communicator but tend to overengineer? Maybe you make some repeating mistakes, or maybe you remind a senior of his younger self. Don't put too much expectations on feedback, try to treat it as a diagnostic step for your work quality.
13. **Don't take feedback/review comments too personally**. Even if you receive negative feedback which seems incorrect or isn't constructive, stay humble. The feedback giver has a limited scope of knowledge, try to understand why such a view was formed. If possible, try to discuss the feedback, maybe you can come seeing eye to eye and even come up with a solution, a process to avoid such things. Of course, sometimes the feedback can be bullshit, take it with a grain of salt. Giving and receiving feedback is a skill, which like any other, needs experience and constant use. And getting feedback more often than at the end of the year, really helps with growing.
14. Related to feedback and being humble. **When doing code reviews try to point out places where good practices or interesting solutions were used**, not only the places where you see possible improvements or questions regarding code. I found, that this helps with the overall tone of remote working and can result in fruitful discussions between developers.
15. **Give yourself some slack**. Give yourself some time for self improvements, self education. Will anything really happen if you try-hard your task overtime? Probably not. If you burn out, the damage will be bigger than the "damage" of working in consistent amount of work every day. As they say, slow and steady wins the race. Same applies with overcommitment - there is no use to answer "yes" to every request, it's impossible to do every interesting task, unfortunately.

## Organizational advice
16. **Take some time to participate in organizational meetings**. Maybe there's a developer meet for monthly progress, which is not directly related to your work? Try to attend them, you'll hear about the problems that other people tackle, and you'll know the voices and faces of other developers. Participating in boring business meetings might also bring you benefits, you might hear some things which are not yet communicated, or hear something said between the lines (a tip for not spacing out during them is taking notes).
17. Oftentimes this is one of the hardest parts of the job, and ignoring it might bite you back later - **stay active during meetings**. Ask all kinds of questions, take notes. Talk with other developers, share experiences. Staying passive with your camera off while scrolling procrastinationland might bite you back in the ass later.

## Technical advice
18. **Try not to overengineer**. A complex solution is rarely better than a simple one. You can extend a simple one easier, than jerry-rigging stuff to the complex one. If you'll really need it, you'll refactor it later. You don't need to prove that you're a code ninja to anyone, you need to make the code readable and easily debuggable. What constitutes as overengineering? Are you solving a problem that exists or might exist? If it might exist, do you have any proof of that? Can you reproduce that? These sorts of questions can help you decide whether you need to do it the simple, or the COOL way.
19. **Test happy paths, boundary values, think about the edge cases and WHAT you're testing from the business side**. This might bring you insights on missing functionality, bring bugs and missing validations into the spotlight. And do manual testing. I know it's boring and slow, but before pushing a commit for review, check if you can trigger the wanted functionality (where applicable). I really hate having to launch the application I'm working on and try to trigger my functionality, but it really pays off.
20. **All software is code, there is no magic**. This idea is really important when you're banging your head at a difficult problem involving unfamiliar dependencies. All things software were written and designed by humans, almost all the time the logic can be traced, understood and predicted. If you're working with open source software, try to peek what's going on inside, what makes the "magic" tick. I've had numerous times when looking at the underlying code made it easier to make my code work as expected or even find issues in that external code. This idea also applies when working with closed source dependencies, it's still code. Maybe you're missing documentation? Maybe you can reverse engineer that part or just think on a high level what's happening inside? At the end of the day - it's all just human ideas laid out in machine code.

## Controversial Advice
21. **Exchange salary info with peers**. You've already worked at the company for some time and performance reviews are coming up, and you feel that you could be earning more? Try to have a 1 to 1 conversation with your colleagues about salary. How do they feel about disclosing theirs? Can you disclose the approximate salary range, to at least see if you're not too far away? Maybe you have a senior which you trust and you want to have a discussion about this (it fits very well with the earlier mentioned feedback sessions)? This is a controversial topic and your employer most likely might not like it, but it's healthy to know your real worth and know if you can punch higher.

# Wrapping up

tl;dr **Stay active, pay attention to people and be critical**. Being active and attentive pays off. Technology and organisations need people to operate, so don't neglect human connections. Take everything with a grain of salt - critical thinking is key. Write down things you like and you don't. *Take this tip with a grain of salt too, though.*

Anyways, that's all for my old man's advice. The sad thing is, that I am not always following these myself, I only seek to do so. We'll how I see the world in 4 more years of software engineering[^6].

Bye bye.

Footnotes:

[^1]: An interesting post on a similar subject, from a more experienced engineer [https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/](https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/)

[^2]: An interesting post on a similar subject [https://levelup.gitconnected.com/how-performing-classical-music-helped-me-code-945a45c12fe7](https://levelup.gitconnected.com/how-performing-classical-music-helped-me-code-945a45c12fe7)

[^3]: A post about tips to senior software engineer, which I think are applicable to all engineers [https://skamille.medium.com/an-incomplete-list-of-skills-senior-engineers-need-beyond-coding-8ed4a521b29f](https://skamille.medium.com/an-incomplete-list-of-skills-senior-engineers-need-beyond-coding-8ed4a521b29f)

[^4]: A post with insights which seem very relatable [https://alexewerlof.medium.com/my-guiding-principles-after-20-years-of-programming-a087dc55596c](https://alexewerlof.medium.com/my-guiding-principles-after-20-years-of-programming-a087dc55596c)

[^5]: Similar idea expressed here [https://www.joelonsoftware.com/2001/12/25/getting-things-done-when-youre-only-a-grunt/](https://www.joelonsoftware.com/2001/12/25/getting-things-done-when-youre-only-a-grunt/)

[^6]: I also understand that your mileage might vary. I've been lucky enough to work in the places, where most of the time I didn't have tight deadlines, my environment wasn't toxic and I had space for my personal and professional growth.