package dev.koju.shifts.employer;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/employers")
@RequiredArgsConstructor
public class EmployerApi {

    private final EmployerRepo employerRepo;

    @GetMapping
    public List<Employer> getAll() {
        return employerRepo.findAll();
    }

    @GetMapping("/{id}")
    public Employer get(@PathVariable("id") Employer employer) {
        return employer;
    }

    @PostMapping
    public Employer create(@RequestBody @Valid Employer employer) {
        return employerRepo.save(employer);
    }

    @PutMapping("/{id}")
    public Employer update(@PathVariable("id") Long id, @RequestBody @Valid Employer employer) {
        employer.setId(id);
        return employerRepo.save(employer);
    }
}
