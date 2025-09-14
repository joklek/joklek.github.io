
---
layout: post
author: joklek
title: "Thoughts after QCon London"
---

I attended QCon London 2025 and wanted to share my thoughts - better late than never!

# The conference
There were multiple tracks, each varying in technical depth. I focused mainly on these tracks, with a few sessions from others mixed in:

* The Path to Senior Engineering Leadership
* Connecting Systems: APIs, Protocols, Observability

I was pleasantly surprised that QCon wasn't overloaded with sponsored content. Unlike other conferences, promotional talks were clearly marked, making it easy to avoid them - just pay closer attention to the session descriptions than I did.

## 🧠 Engineering Leadership & Growth
The leadership track was naturally more abstract, but it still brought good ideas. Here are some of them I found interesting.

I enjoyed getting some perspective on how things are done on the higher organizational level, like - what challenges directors face and how to face changed responsibilities. It felt like some of the problems there are similar to the engineering ones. And a great reminder about how, in the end, we're humans working with other humans. Be gentle, be humble, care for others and your own wellbeing.

### Careers aren’t ladders
Careers aren't ladders, they’re squiggly paths. This is an idea put forward by Sophie Weston, which I really liked, and it was my first time hearing it being encouraged. Transition between IC and leadership roles is normal and valuable. This means that stepping back into an IC role shouldn’t be seen as a downgrade. I imagine that this could be looked at from two angles. One is a personal self-value angle that you shouldn’t be afraid to explore. And the second angle - an organization that has this view might be more successful because it won’t lose domain, knowing people who want to change paths.

### Be a broken comb
[Be a broken comb](https://spin.atomicobject.com/broken-comb-people/), develop broad, varied expertise. We’ve all heard about T-shaped engineers. But Sophie Weston suggests an idea that we should allow ourselves to be broken combs. Diverse experience might help us in unexpected situations, complementing the idea of squiggly career paths.


### Build your internal brand 
Engage in mentoring, talks, and community. This was mentioned in the talk “How to Always Get Invited to Big Strategic Conversations” and it felt like it would later connect well with “Building a Personal Brand To Boost Your Career”. The latter was one of the rare sponsored tracks, not pretty useful, except for the shared experience that blogs aren’t the best medium to gain followers and attention. And yet, here we are!

### Burnout prevention
Change your approach as the scope scales. Don’t brute-force through the problems you have. This was an idea that was forming in my head for quite some time, but I didn’t have the right words to communicate it clearly. I feel like I’ve been working in similar patterns since I started work, and that they don’t scale well with the growing responsibilities. And coming from Thiago Ghisi, a director of engineering who had a squiggly path, was a really good idea to pass into my head. Also, a thought that cut deeper than I expected. The final stages of chronic issues - heroism and burnout. Not effective strategies. "Heroes are a bandaid, not a longterm solution". Feels like I'm stuck in this stage right now :(

### People > Tech
Team structure, expectations, and communication are key. This point was repeated multiple times in the talks I was in. The problems we face are “just” people problems. Not in the sense that they’re small, but in the sense that people are the most complicated part in organizations, not the tech. Back the culture you want to grow and use organizational tools to form it. One of the extreme examples was using firing to show what behavior is unacceptable, even if the talent is good.


## Small reorgs > Big reorgs
Continuously evolve structure. Small adjustments don’t disturb the whole organization and let you make changes when you need them. This is the part that felt that organizational refactorings seem similar code refactorings. Don’t let design debt marinate - fix it when you can, or else you’ll have a lot of trouble in friction happen later. "Don’t boil the ocean - work inside out". And honestly, I’ve never heard reorgs being presented with this perspective. I imagine it’s impossible to avoid them in a growing org, but I rarely registered them as this sort of organizational tool.

### Bad decisions are better than no decisions 
Bad decisions are better than no decisions or as they say in Three Body Problem - "Only Advance" (maybe it doesn't fit too well here, but whatever)

### Success is about relationships, clarity, and letting go of the hands-on work
For senior ICs & Directors **Success is about relationships, clarity, and letting go of the hands-on work**. Earn your seat by doing your job well, staying curious, and building relationships. Your ideas might not survive, and that's ok. Or as a quote I wrote down "I love technology but my role is to make it happen".

Also the idea that an organization is a system whose parts are all in perfect tension was an interesting idea. The directors job then is to keep things in tension as the balances change. People change, requirements change and etc., but the tension must stay.

### Support matters
Promotions should be empowering, not isolating. They should not feel like stepping stones.

## 🛠️ Platform & Infrastructure
Some keywords/ideas I caught during the talks:
* Resilient Platforms: Prioritize intuitive UX, evergreen updates, shared responsibility, and cultural maturity.
* Sociotechnical Systems: Use [CALMS](https://www.atlassian.com/devops/frameworks/calms-framework) (Culture, Automation, Lean, Measurement, Sharing). Evolve the social and technical sides together.
* SaaS at Scale: Plan for multitenancy, cost efficiency, provisioning, and long-term operations.
📊 Observability & Insights
* [The Netflix Approach to tracing](https://netflixtechblog.com/building-netflixs-distributed-tracing-infrastructure-bb856c319304): Use event processing and tracing (Kafka, Flink) to connect system spans to business impact. The talk felt a bit over-rehearsed and cold, Although the talk felt a bit over-rehearsed, it showed how engineers turned a technical topic into something valuable for the business - earning more time and incentives to improve it. Cool stuff.
* Focus on perceived delays: Not just system metrics - optimize user experience. Sometimes you might have the fastest API endpoints, but the app might forget to call the endpoints sequentially, or it might have long animations.
* Local-First Software: CRDTs enable offline use, but schema and security remain challenges. Alex Good, in his talk "Local First - How To Build Software Which Still Works After the Acquihire" talked about CRDTs, which is a topic I secretly want to get into.
* Observability Lasagna: Build layered, goal-driven dashboards from overview → system → trace/logs.
    * [From Dashboard Soup to Observability Lasagna: Building Better Layers](https://www.youtube.com/watch?v=rFBltLClyqA) by Martha Lambert was a talk that felt like it came from someone who's working on the same problems that I have, and coming up with approaches that I haven't thought of. It basically talks about the usual problem of messy and improvised monitoring setups that people set up ad-hoc, and suggests ways to layer information to make it more accessible, meaningful and useful. And best of all, these were real life examples of how their company does it, not just plain theory. Monitoring lasagna, drill exercises, and spice on top.


# Thoughts 6 months after
I liked that during the three days, I heard less bullshit than I expected. Some talks were really boring, but it was a quick switch from one room to another to find a better one. I do have a feeling that next time I'd like to see more technical talks.

Also talking a bout the conference, there were 2 talks that stuck with me the most. It was "[The Principal Engineer's Path: Skills, Strategies, and Lessons Learned](https://qconlondon.com/presentation/apr2025/principal-engineers-path-skills-strategies-and-lessons-learned)" by Sophie Weston, and "[From Dashboard Soup to Observability Lasagna: Building Better Layers](https://www.youtube.com/watch?v=rFBltLClyqA)" by Martha Lambert.

Sophie's talk resonated with me more than I expected. It helped me embrace my own squiggly path and that, in the long run - it's the experience that matters. Sitting on my ass contemplating life won't help me move forward. The talk also had a ton of references to what could be useful to a growing engineer (the list is too long to post here. I'll try to link it if the talk becomes public).

And Martha's talk inspired me to repeat the success they had in my workplace. But real life is harder than that, and I still haven't published my WIP dashboard at work, where I can't get my first layer of lasagna done. I can't come up with ideas on how to approach drill exercises. I feel stuck and confused about this. But also hopeful, maybe? The talk set an ideal for me to reach, and I hope that I'm growing in the right direction so that one day I can reach it. Working on it.

And I really want to mention this, as it caught me off guard. [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety) was mentioned in several talks. It's a term I hadn't encountered before QCon, so I wonder if it's overlooked in my circles or simply taken for granted. While some aspects seem basic like "treat people like people" or "show goodwill when working with people". But this empathetic view of the technical people, of the organisation felt... honest and refreshing? I really hope it was honest.

All in all I'd recommend the conference next year for people who are interested in leadership, the technical details and the lifecycle of software. I'm happy I didn't expect a strictly technical atmosphere and, honestly, this helped me imagine myself a bit better in the leadership boots. Maybe.